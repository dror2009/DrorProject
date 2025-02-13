using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace DrorProject.ashx
{
    /// <summary>
    /// Summary description for userTracker
    /// </summary>
    public class userTracker : IHttpHandler, System.Web.SessionState.IRequiresSessionState
    {
        private static HashSet<string> activeUsers = new HashSet<string>();
        public void ProcessRequest(HttpContext context)
        {
            if (context.Request.HttpMethod == "POST")
            {
                string body;
                using (var reader = new StreamReader(context.Request.InputStream))
                {
                    body = reader.ReadToEnd();
                }

                var json = new JavaScriptSerializer().Deserialize<Dictionary<string, string>>(body);
                string status = json["status"];
                string sessionId = context.Session?.SessionID ?? Guid.NewGuid().ToString();

                if (status == "connected")
                    activeUsers.Add(sessionId);
                else if (status == "disconnected")
                    activeUsers.Remove(sessionId);

                context.Response.StatusCode = 200;
                context.Response.Write("OK");
            }
            else if (context.Request.HttpMethod == "GET" && context.Request.QueryString["count"] == "true")
            {
                var response = new { count = activeUsers.Count };
                context.Response.ContentType = "application/json";
                context.Response.Write(new JavaScriptSerializer().Serialize(response));
            }
            else
            {
                context.Response.StatusCode = 405; // Method Not Allowed
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