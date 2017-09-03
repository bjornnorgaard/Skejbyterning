using Engine.Interface;
using Microsoft.AspNetCore.Mvc;

namespace Engine.Api.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {
        private readonly ISkejbyterning _skejbyterning;

        public GameController(ISkejbyterning skejbyterning)
        {
            _skejbyterning = skejbyterning;
        }

        [HttpGet]
        public string Get()
        {
            return "Controller works!";
        }
        
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return $"{id}";
        }
        
    }
}
