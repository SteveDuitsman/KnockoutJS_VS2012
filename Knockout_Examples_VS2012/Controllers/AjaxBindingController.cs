using MvcApplication1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication1.Controllers
{
    public class AjaxBindingController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult SongList()
        {
            return View();
        }

        [HttpGet]
        public ActionResult SavableSongList()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SaveSongList(IEnumerable<Song> songs)
        {
            var dummy = "line";
            return SavableSongList();
        }

        private IEnumerable<Song> songs = new List<Song> {
            new Song { Id = 1, Title = "Mama said knock you out", Artist = "LL Cool J"/*, Duration = new TimeSpan(0, 3, 49 )*/},
            new Song { Id = 2, Title = "Rope", Artist = "Foo Fighters"/*,Duration = new TimeSpan(0, 4, 19 )*/},
            new Song { Id = 3, Title = "Chicken Dance", Artist = "Werner Thomas"/*,Duration = new TimeSpan(1, 3, 0 )*/},
        };

        [HttpGet]
        public JsonResult LoadSongs(int? id)
        {
            var songData = songs;
            if (id.HasValue)
            {
                songData = songs.Where(s => s.Id == id.Value);
            }
            return new JsonResult { Data = songData, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}
