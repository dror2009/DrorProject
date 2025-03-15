using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject.pages
{
    public partial class chat : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            drorCommands.isLoggedIn();
            LoadMessages();
        }
        protected void LoadMessages()
        {
            List<object> messages = ChatController.GetMessages();
            string messagesHtml = "";

            foreach (var msg in messages)
            {
                var messageData = (dynamic)msg;
                messagesHtml += $"<li><strong>{messageData.Username}:</strong> {messageData.Message} <span>({messageData.Timestamp})</span></li>";
            }

            messagesList.InnerHtml = messagesHtml; // Update UI with messages
        }
    }
}
