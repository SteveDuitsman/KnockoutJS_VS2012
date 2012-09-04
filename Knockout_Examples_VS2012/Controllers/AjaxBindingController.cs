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

        [HttpGet]
        public ActionResult SavableSongListWithDuration()
        {
            return View("SavableSongListWithLength");
        }

        [HttpPost]
        public ActionResult SaveSongList(IEnumerable<Song> songs)
        {
            return SavableSongList();
        }

        private IEnumerable<Song> songs = new List<Song> {
            new Song { Id = 1, Title = "Mama Said Knock You Out", Artist = "LL Cool J", Length = new TimeSpan(0, 3, 49 )},
            new Song { Id = 2, Title = "Rope", Artist = "Foo Fighters", Length = new TimeSpan(0, 4, 19 )},
            new Song { Id = 3, Title = "The Chicken Dance", Artist = "Werner Thomas", Length = new TimeSpan(1, 3, 0 )},
            new Song { Id = 4, Title = "It Is What It Is", Artist = "Melvin Sparks", Length = new TimeSpan(0, 5, 40 )}
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
