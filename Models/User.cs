using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRChat.Models
{
    public class User
    {

        public int Id { get; private set; }
        public String Username { get; private set; }

        public User(int Id, String Username)
        {
            this.Id = Id;
            this.Username = Username;
        }
    }
}
