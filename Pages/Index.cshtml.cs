using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System.Web;
using System.Drawing;
using System.ComponentModel;

using System.IO;
using System.Globalization;
using System.Net.NetworkInformation;
using System.Reflection;

namespace webAppSchool.Pages
{


    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet ()
        {
        }

        public string Message { get; private set; } = "";

        public string inpName { get; set; } = "";

        public void OnPost()
        {
            string[] action = Request.Form["action"].ToString().Split("~");
            
            if (Request.Form["action"].ToString().Trim().IndexOf("removeFile")   == 0)
            {
                doRemoveFile(action[1]);
            }
            inpName = Request.Form["inpName"];
        }

        public void doRemoveFile(string fileName)
        {
            if(System.IO.File.Exists(@"wwwroot\Data\" + fileName))
            {
                System.IO.File.Delete(@"wwwroot\Data\" + fileName);
            }
        }
    }
}
