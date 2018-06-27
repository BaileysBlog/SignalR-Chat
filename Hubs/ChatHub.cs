using Microsoft.AspNetCore.SignalR;
using SignalRChat.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        public async void SendToAll(String Content)
        {
            var msg = await ProcessMessage(Content, Context.ConnectionId);
            await Clients.All.SendAsync("sendToAll", msg);
        }


        private async Task<Message> ProcessMessage(String Content, String ConnId)
        {
            //TODO
            //1-Store new message in the database and return it's id
            //2-Search the database for a user that created that message
            //3-Return a complete message object that will be used to send out to everyone
            return new Message(1, await GetUserByConnection(ConnId), "Test Message", DateTime.Now);
        }

        private async Task<User> GetUserByConnection(String ConnId)
        {
            //TODO
            //1-Search database for user with connection id and return data about that user
            //2-Use that information in message object

            return null;
        }
    }
}
