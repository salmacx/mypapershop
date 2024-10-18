namespace api.models;
using System.ComponentModel.DataAnnotations;


public class Order
{
    public int Id { get; set; }                     
    public DateTime OrderDate { get; set; }       
    public decimal TotalAmount { get; set; } 
    
    public ICollection<OrderItem> OrderItems { get; set; }
}