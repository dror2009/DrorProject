using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace DrorProject
{
    public class ChatController
    {
        private static string dbName = "DB.mdf"; // Database name

        public static string SendMessage(string message)
        {
            // Ensure session exists
            if (HttpContext.Current?.Session == null || HttpContext.Current.Session["loggedUser"] == null)
            {
                return "❌ Error: User session is missing.";
            }

            string username = HttpContext.Current.Session["loggedUser"].ToString();

            if (string.IsNullOrWhiteSpace(message))
            {
                return "❌ Message cannot be empty.";
            }

            string sql = $"INSERT INTO ChatMessages (Username, Message) VALUES (N'{username}', N'{message}')";

            int rowsAffected = HelperA.DoQuery(dbName, sql);
            return rowsAffected > 0 ? "✅ Message sent successfully!" : "❌ Error sending message.";
        }

        public static List<object> GetMessages()
        {
            // Step 1: Get the total count of messages
            string countSql = "SELECT COUNT(*) FROM ChatMessages";
            int totalRows = Convert.ToInt32(HelperA.ExecuteDataTable(dbName, countSql).Rows[0][0]);

            // Step 2: Calculate OFFSET safely
            int offset = Math.Max(0, totalRows - 100);

            // Step 3: Fetch messages with a valid OFFSET
            string sql = $@"
        SELECT Username, Message, Timestamp 
        FROM ChatMessages 
        ORDER BY Timestamp ASC 
        OFFSET {offset} ROWS 
        FETCH NEXT 100 ROWS ONLY";

            // Step 4: Execute the query
            DataTable dt = HelperA.ExecuteDataTable(dbName, sql);

            // Step 5: Process and return the results
            List<object> messages = new List<object>();
            foreach (DataRow row in dt.Rows)
            {
                messages.Add(new
                {
                    Username = row["Username"].ToString(),
                    Message = row["Message"].ToString(),
                    Timestamp = Convert.ToDateTime(row["Timestamp"]).ToString("HH:mm:ss")
                });
            }

            return messages;
        }


    }
}