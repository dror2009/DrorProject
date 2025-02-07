using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject
{
    public partial class Master1 : System.Web.UI.MasterPage
    {
        public string welcome = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["loggedUser"] != null)
            {
                welcome = "Welcome, " + Session["loggedUser"].ToString();
            }
            else
            {
                welcome = "Welcome Guest";
            }
        }
    }
}