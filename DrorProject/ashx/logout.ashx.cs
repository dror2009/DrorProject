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
            string loggedUser = context.Session["loggedUser"].ToString();
            if (context.Session["loggedUser"] != null)
            {
                context.Application["loggedUsers"] = context.Application["loggedUsers"].ToString().Replace($"<li>{loggedUser}</li>", "");
                context.Session["loggedUser"] = null;
                context.Session.Clear();
                context.Session.Abandon();
                context.Session.RemoveAll();
                context.Response.Redirect("/pages/main.aspx");
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