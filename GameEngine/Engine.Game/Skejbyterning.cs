using Engine.Interface;
using Engine.Model;

namespace Engine.Game
{
    public class Skejbyterning : ISkejbyterning
    {
        public Response DoStuff(Request request)
        {
            var sumOfEyes = (request.DieOne + request.DieTwo) % 2;

            var response = new Response
            {
                NumberOfSips = sumOfEyes,
                Result = "Derp"
            };

            return response;
        }
    }
}
