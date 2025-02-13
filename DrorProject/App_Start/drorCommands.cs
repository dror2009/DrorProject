using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Xml.Linq;

namespace DrorProject.App_Start
{
    public class drorCommands
    {
        public static void CheckAccess(string dbName)
        {
            if (HttpContext.Current.Session["loggedUser"] == null)
                return;

            string user = HttpContext.Current.Session["loggedUser"].ToString();
            string sql = $"SELECT USERPERMISSION FROM Users WHERE UNAME = N'{user}'";
            DataTable userData = HelperA.ExecuteDataTable(dbName, sql);

            if (userData.Rows.Count > 0)
            {
                string access = userData.Rows[0]["USERPERMISSION"].ToString();
                HttpContext.Current.Session["userAccess"] = access;
            }
        }
        public static string GetUsersTable(string fileName, string sql)
        {
            DataTable dt = HelperA.ExecuteDataTable(fileName, sql);
            string html = "<table border='1'>";

            // Add header row
            html += "<tr>";
            html += "<th>Select</th>"; // Checkbox column
            foreach (DataColumn col in dt.Columns)
            {
                html += $"<th>{col.ColumnName}</th>";
            }
            html += "</tr>";

            // Add user rows
            foreach (DataRow row in dt.Rows)
            {
                html += "<tr>";
                html += $"<td><input type='checkbox' name='selectedUsers' value='{row["Id"]}'></td>";

                foreach (DataColumn col in dt.Columns)
                {
                    html += $"<td>{row[col].ToString()}</td>";
                }
                html += "</tr>";
            }

            html += "</table>";
            return html;
        }
    }
}