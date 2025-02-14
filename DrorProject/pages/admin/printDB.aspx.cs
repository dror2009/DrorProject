using DrorProject.App_Start;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace DrorProject.pages.admin
{
    public partial class printDB : System.Web.UI.Page
    {
        private string dbName = "DB.mdf";
        private string access;
        public string UsersHtml = "";
        public int connectedUsers;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["loggedUser"] != null)
            {
                access = (string)Session["userAccess"];
                if (access.Equals("admin"))
                {
                    string sql = "SELECT Id, UNAME, FNAME, LNAME, EMAIL, GENDER, AGE, PREFIX, PNUM, CITY, HOBBY, YEARBORN, USERPERMISSION FROM Users;"; // Fetch all user data
                    UsersHtml = drorCommands.GetUsersTable(dbName, sql);
                    connectedUsers = (int)Application["connections"];
                }
                else
                {
                    Response.Redirect("~/pages/main.aspx");
                }
            }
            else
            {
                Response.Redirect("~/pages/main.aspx");
            }

            // Handle form submissions
            if (Request.HttpMethod == "POST")
            {
                string actionType = Request.Form["actionType"];
                string selectedIds = Request.Form["selectedUsers"];

                if (!string.IsNullOrEmpty(selectedIds))
                {
                    switch (actionType)
                    {
                        case "delete":
                            DeleteUsers(selectedIds);
                            break;
                        case "update":
                            UpdateUser(selectedIds);
                            break;
                        case "togglePermissions":
                            TogglePermissions(selectedIds);
                            break;
                    }
                }
            }
        }
        private void DeleteUsers(string selectedIds)
        {
            string sql = $"DELETE FROM Users WHERE Id IN ({selectedIds})";
            HelperA.DoQuery(dbName, sql);
            Response.Redirect(Request.RawUrl);
        }

        private void UpdateUser(string selectedId)
        {
            string[] userIds = selectedId.Split(','); // Split in case multiple are passed
            string singleUserId = userIds[0]; // Take only the first one

            Session["AdminUpdate"] = singleUserId; // Store only one user ID in session
            DataTable dt = HelperA.ExecuteDataTable(dbName,$"SELECT UNAME FROM Users WHERE Id = {singleUserId}");
            Session["AdminUpdateName"] = dt.Rows[0]["UNAME"].ToString();
            Response.Redirect("~/pages/admin/adminUpd.aspx", false);
            HttpContext.Current.ApplicationInstance.CompleteRequest();
        }

        private void TogglePermissions(string selectedIds)
        {
            string sql = $"UPDATE Users SET USERPERMISSION = CASE WHEN USERPERMISSION = 'admin' THEN '' ELSE 'admin' END WHERE Id IN ({selectedIds})";
            HelperA.DoQuery(dbName, sql);
            Response.Redirect(Request.RawUrl);
        }
    }
}