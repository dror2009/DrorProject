﻿using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DrorProject.pages
{
    public partial class dax : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            drorCommands.isLoggedIn();
        }
    }
}