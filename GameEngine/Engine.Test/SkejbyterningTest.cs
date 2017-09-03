using Engine.Game;
using Engine.Interface;
using Engine.Model;
using Xunit;

namespace Engine.Test
{
    public class SkejbyterningTest
    {
        private ISkejbyterning _uut;

        public SkejbyterningTest()
        {
            _uut = new Skejbyterning();
        }

        [Fact]
        public void Test1()
        {
            // Arrange 
            var request = new Request
            {
                DieOne = 3,
                DieTwo = 4
            };

            // Act
            var response = _uut.DoStuff(request);

            // Assert
            Assert.Equal(1, response.NumberOfSips);
        }
    }
}
