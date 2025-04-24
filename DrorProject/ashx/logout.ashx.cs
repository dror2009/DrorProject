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
                context.Session["loggedUser"] = null;
                context.Session.RemoveAll();
                context.Session.Clear();
                context.Session.Abandon();
                context.Response.Redirect("/pages/main.aspx");
                context.Response.End();
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