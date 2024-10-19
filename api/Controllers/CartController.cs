using Microsoft.AspNetCore.Mvc;
using api.Data;
using api.models;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly AppDbContext _context;
        private static List<CartItem> cartItems = new List<CartItem>(); 

        public CartController(AppDbContext context)
        {
            _context = context;
        }

       
        [HttpPost]
        public ActionResult AddToCart([FromBody] CartItemDto itemDto)
        {
            if (itemDto == null || itemDto.ProductId <= 0 || itemDto.Quantity <= 0)
                return BadRequest("Invalid item.");

            var existingCartItem = cartItems.FirstOrDefault(ci => ci.ProductId == itemDto.ProductId);
            if (existingCartItem != null)
            {
                existingCartItem.Quantity += itemDto.Quantity; 
            }
            else
            {
                cartItems.Add(new CartItem
                {
                    ProductId = itemDto.ProductId,
                    Quantity = itemDto.Quantity
                });
            }

            return Ok(cartItems);
        }

      
        [HttpDelete("{productId}")]
        public ActionResult RemoveFromCart(int productId)
        {
            var cartItem = cartItems.FirstOrDefault(ci => ci.ProductId == productId);
            if (cartItem != null)
            {
                cartItems.Remove(cartItem);
                return Ok(cartItems);
            }

            return NotFound("Item not found in cart.");
        }

     
        [HttpGet]
        public ActionResult<List<CartItem>> GetCartItems()
        {
            return Ok(cartItems);
        }

       
        [HttpPost("checkout")]
        public ActionResult Checkout()
        {
            if (!cartItems.Any())
                return BadRequest("Cart is empty.");

            

        
            cartItems.Clear();
            return Ok("Checkout successful!");
        }
    }

    public class CartItemDto
    {
        public int ProductId { get; set; }  
        public int Quantity { get; set; }   
    }
}
