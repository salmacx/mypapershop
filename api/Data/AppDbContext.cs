namespace api.Data;
using Microsoft.EntityFrameworkCore;
using api.models;
public class AppDbContext : DbContext // Inherit from DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // DbSets for each model
    public DbSet<Product> Products { get; set; } // Updated from Papers to Products
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; } // Updated from OrderEntry to OrderItem

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<OrderItem>()
            .HasOne(oi => oi.Order)
            .WithMany(o => o.OrderItems)
            .HasForeignKey(oi => oi.OrderId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<OrderItem>()
            .HasOne(oi => oi.Product)
            .WithMany()
            .HasForeignKey(oi => oi.ProductId)
            .OnDelete(DeleteBehavior.Cascade);
       
        // Seed initial data for products
        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "Le Félin Victorien", Price = 999.0m, ImageUrl = "/assets/products/2.jpg" },
            new Product { Id = 2, Name = "Papillon Bleu Éternel", Price = 1999.0m, ImageUrl = "/assets/products/3.jpg" },
            new Product { Id = 3, Name = "Journal Cœur d’Or", Price = 699.0m, ImageUrl = "/assets/products/18.png" },
            new Product { Id = 4, Name = "Route Sans Fin", Price = 228.0m, ImageUrl = "/assets/products/5.jpg" },
            new Product { Id = 5, Name = "Lune d’Argent", Price = 19.99m, ImageUrl = "/assets/products/6.jpg" },
            new Product { Id = 6, Name = "Cartes du Destin", Price = 68.0m, ImageUrl = "/assets/products/8.jpg" },
            new Product { Id = 7, Name = "Fleurs Pressées Héritage", Price = 120.0m, ImageUrl = "/assets/products/4.jpg" },
            new Product { Id = 8, Name = "Roses Rouges Éternelles", Price = 40.0m, ImageUrl = "/assets/products/12.jpg" },
            new Product { Id = 9, Name = "Yeux de Sirène", Price = 800.0m, ImageUrl = "/assets/products/9.jpg" }
        );
    }
}
