<div align="center">
  <p>
    <a href="https://nodei.co/npm/discord-user-api/"><img src="https://nodei.co/npm/discord-user-apis.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# Discord User API
discord-user-api works by requiring the package in your NodeJS file then calling its functions.

## Installation
To install the package type the following:
```bash
npm install discord-user-api
```

## Getting Started
Require the discord-user-api module and create an instance of the API like the following example:

```JS
var client = new (require('discord-user-api'))('discord token');
```

## API Methods
**Join Server:**
```JS
client.joinServer('invite code');
```

**Leave Server:**
```JS
client.leaveServer('server id');
```

**Get Servers:**
```JS
client.getServers(function(data) {
   console.log(data);
});
```

**Send Message:**
```JS
client.sendMessage('channel id', 'message');
```

**Delete Message:**
```JS
client.deleteMessage('channel id', 'message id');
```

**Get Messages:**
```JS
client.getMessages('channel id', 25);
```

**Add Reaction:**
```JS
client.addReaction('channel id', 'message id', '🐢');
```

**Remove Reaction:**
```JS
client.removeReaction('channel id', 'message id', '🐢');
```

**Is Typing:**
```JS
client.isTyping('channel id');
```

**Change Nickname:**
```JS
client.changeNickname('server id', 'new nickname');
```

**Update Status:**
```JS
client.updateStatus('dnd');
```

**Update User Settings:**
```JS
client.updateUserSettings('username', 'email', 'password', 'new password', 'data:image/jpeg;base64,Hq..');
```

**Create Server:**
```JS
client.createServer('server name', 'eu-west', 'data:image/jpeg;base64,H8q..');
```

**Delete Server:**
```JS
client.deleteServer('server id');
```

**Create Channel:**
```JS
client.createChannel('server id', 'channel name', 'channel parent id', 'channel type');
```

**Delete Channel:**
```JS
client.deleteChannel('channel id');
```

**Create Role:**
```JS
client.createRole('server id');
```

**Delete Role:**
```JS
client.deleteRole('server id', 'role id');
```

**Join Hypesquad:**
```JS
client.joinHypesquad(1);
```

**Create Invite:**
```JS
client.createInvite('channel id');
```

**Get Relationships**
```JS
client.getRelationships();
```