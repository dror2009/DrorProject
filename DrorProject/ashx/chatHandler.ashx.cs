using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.SessionState;

namespace DrorProject.ashx
{
    /// <summary>
    /// Summary description for chatHandler
    /// </summary>
    public class chatHandler : IHttpHandler, IRequiresSessionState
    {
        private JavaScriptSerializer serializer = new JavaScriptSerializer();

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "application/json";
            string action = context.Request.QueryString["action"];

            if (action == "sendMessage")
            {
                string message = context.Request.Form["Message"];
                string responseMessage = ChatController.SendMessage(message);
                context.Response.Write(serializer.Serialize(responseMessage));
            }
            else if (action == "getMessages")
            {
                List<object> messages = ChatController.GetMessages();
                context.Response.Write(serializer.Serialize(messages));
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}