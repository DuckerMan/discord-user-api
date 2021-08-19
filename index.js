const needle = require('needle');
const util = require('util');
const req = util.promisify(needle.request);

class Discord {
    constructor(token, proxy){
        this.apiToken = token;
        this.apiBase = 'https://discordapp.com/api/v6/';
        this.request  = require('request');
        this.proxy = proxy;
    }

    async _httpRequest(method, url, headers, post) {
        let json = false;

        if (!post) {
            headers["content-type"] = "application/x-www-form-urlencoded";
        } else {
            json = true;
        }

    
        let params = {headers, json:post};

        if (this.proxy) params.proxy = proxy;

        let res = await req(method, url, post, params);
        return res.body;
     };

    async apiRequest(method, path, post){
        return await this._httpRequest(method, this.apiBase + path, {
            'x-requested-with': 'XMLHttpRequest',
            'authorization':    this.apiToken,
         }, post);
    }

    async getRelationships(){
        return await this.apiRequest('GET', 'users/@me/relationships');
    }

    async getServers(){
        return await this.apiRequest('GET', 'users/@me/guilds', null);
    }

    async joinServer(inviteCode) {
        return await this.apiRequest('POST', 'invite/' + inviteCode, null);
     };
     
     
     async leaveServer(serverId) {
        return await this.apiRequest('DELETE', 'users/@me/guilds/' + serverId, null);
     };
 
  
     async sendMessage(channelId, message) {
        return await this.apiRequest('POST', 'channels/' + channelId.toString() + '/messages', JSON.stringify({'content': message, 'nonce': Date.now(), 'tts': false}));
     };
  
     async deleteMessage(channelId, messageId) {
        return await this.apiRequest('DELETE', 'channels/' + channelId + '/messages/' + messageId, null);
     };
  
     async getMessages(channelId, amount) {
        return await this.apiRequest('GET', 'channels/' + channelId + '/messages?limit=' + amount, null);
     };
  
     async addReaction(channelId, messageId, reaction) {
        return await this.apiRequest('PUT', 'channels/' + channelId + '/messages/' + messageId + '/reactions/' + reaction + '/@me', null);
     };
  
     async removeReaction(channelId, messageId, reaction) {
        return await this.apiRequest('DELETE', 'channels/' + channelId + '/messages/' + messageId + '/reactions/' + reaction + '/@me', null);
     };
  
     async setTyping(channelId) {
        return await this.apiRequest('POST', 'channels/' + channelId + '/typing', null);
     };
  
     async changeNickname(serverId, nickname) {
        return await this.apiRequest('PATCH', 'guilds/' + serverId + '/members/@me/nick', JSON.stringify({'nick': nickname}));
     };
  
     async updateStatus(status) {
        return await this.apiRequest('PATCH', 'users/@me/settings', JSON.stringify({'status': status}));
     };
  
     async updateUserSettings(username, email, password, newPassword, avatarBase64) {
        return await this.apiRequest('PATCH', 'users/@me', JSON.stringify({'username': username, 'email': email, 'password': password, 'new_password': newPassword, 'avatar': avatarBase64, 'discriminator': null}));
     };
  
     async createServer(name, region, icon) {
        return await this.apiRequest('POST', 'guilds', JSON.stringify({'name': name, 'region': region, 'icon': icon}));
     };
  
     async deleteServer(serverId) {
        return await this.apiRequest('POST', 'guilds/' + serverId + '/delete', JSON.stringify({}));
     };
  
     async createChannel(serverId, name, parentId, type) {
        return await this.apiRequest('POST', 'guilds/' + serverId + '/channels', JSON.stringify({'name': name, 'parent_id': parentId, 'type': type, 'permission_overwrites': []}));
     };
  
     async deleteChannel(channelId) {
        return await this.apiRequest('DELETE', 'channels/' + channelId, null);
     };
  
     async createRole(serverId) {
        return await this.apiRequest('POST', 'guilds/' + serverId + '/roles', null);
     };
  
     async deleteRole(serverId, roleId) {
        return await this.apiRequest('DELETE', 'guilds/' + serverId + '/roles/' + roleId, null);
     };
  
     async joinHypesquad(houseNumber) {
        return await this.apiRequest('POST', 'hypesquad/online', JSON.stringify({'house_id': houseNumber}));
     };
  
     async createInvite(channelId) {
        return await this.apiRequest('POST', 'channels/' + channelId + '/invites', JSON.stringify({'max_age': 0, 'max_uses': 0, 'temporary': false}));
     };
}

module.exports = Discord;
