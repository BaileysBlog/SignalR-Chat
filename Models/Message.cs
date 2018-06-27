using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRChat.Models
{
    public class Message
    {
        public int Id { get; private set; }
        public User Sender { get; private set; }

        public String Content { get; private set; }
        public DateTime Timestamp { get; private set; }


        public Message(int Id, User Sender, String Content, DateTime Timestamp)
        {
            this.Id = Id;
            this.Sender = Sender;
            this.Content = Content;
            this.Timestamp = Timestamp;
        }

    }
}
