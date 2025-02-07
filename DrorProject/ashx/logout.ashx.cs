using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace DrorProject
{
    /// <summary>
    /// Summary description for logout
    /// </summary>
    public class logout : IHttpHandler, IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");
            if (context.Session["loggedUser"] != null)
            {
                context.Session["loggedUser"] = null;
                context.Session.Clear();
                context.Session.Abandon();
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