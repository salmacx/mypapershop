using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateProductSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "ImageUrl", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "/assets/products/2.jpg", "Le Félin Victorien", 999.0m },
                    { 2, "/assets/products/3.jpg", "Papillon Bleu Éternel", 1999.0m },
                    { 3, "/assets/products/18.png", "Journal Cœur d’Or", 699.0m },
                    { 4, "/assets/products/5.jpg", "Route Sans Fin", 228.0m },
                    { 5, "/assets/products/6.jpg", "Lune d’Argent", 19.99m },
                    { 6, "/assets/products/8.jpg", "Cartes du Destin", 68.0m },
                    { 7, "/assets/products/4.jpg", "Fleurs Pressées Héritage", 120.0m },
                    { 8, "/assets/products/12.jpg", "Roses Rouges Éternelles", 40.0m },
                    { 9, "/assets/products/9.jpg", "Yeux de Sirène", 800.0m }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);
        }
    }
}
