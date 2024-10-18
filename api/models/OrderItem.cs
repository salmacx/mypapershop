namespace api.models; 

public class OrderItem
{
    public int Id { get; set; }                      // Corresponds to the 'id' column
    public int OrderId { get; set; }                  // Corresponds to the 'order_id' column
    public int ProductId { get; set; }                // Corresponds to the 'product_id' column
    public int Quantity { get; set; }                 // Corresponds to the 'quantity' column
    public decimal Price { get; set; }                // Corresponds to the 'price' column

    // Navigation properties
    public Order Order { get; set; }                  // Reference to the Order
    public Product Product { get; set; }   
}