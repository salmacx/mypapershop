namespace api.Data
{
    using Microsoft.EntityFrameworkCore;
    using api.models;

    public class AppDbContext : DbContext 
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

   
        public DbSet<Product> Products { get; set; } 
        public DbSet<CartItem> CartItems { get; set; } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CartItem>()
                .HasOne(ci => ci.Product)
                .WithMany() 
                .HasForeignKey(ci => ci.ProductId)
                .OnDelete(DeleteBehavior.Cascade);
       
           
        }
    }
}
