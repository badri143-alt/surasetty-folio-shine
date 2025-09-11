import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Plus, Minus, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

const EcommercePage = () => {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, rating: 4.5, image: '/placeholder.svg', category: 'Electronics' },
    { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.8, image: '/placeholder.svg', category: 'Electronics' },
    { id: 3, name: 'Running Shoes', price: 79.99, rating: 4.3, image: '/placeholder.svg', category: 'Sports' },
    { id: 4, name: 'Coffee Maker', price: 149.99, rating: 4.6, image: '/placeholder.svg', category: 'Home' },
    { id: 5, name: 'Backpack', price: 49.99, rating: 4.4, image: '/placeholder.svg', category: 'Travel' },
    { id: 6, name: 'Bluetooth Speaker', price: 59.99, rating: 4.7, image: '/placeholder.svg', category: 'Electronics' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0)
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product ? product.price * quantity : 0);
    }, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border/40 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              E-Commerce Store
            </h1>
            <div className="flex items-center space-x-4">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="bg-gradient-card border-border/20 hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-t-lg" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                          </div>
                          <Badge variant="outline">{product.category}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">${product.price}</span>
                        <div className="flex items-center space-x-2">
                          {cart[product.id] > 0 && (
                            <>
                              <Button size="sm" variant="outline" onClick={() => removeFromCart(product.id)}>
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{cart[product.id]}</span>
                            </>
                          )}
                          <Button size="sm" onClick={() => addToCart(product.id)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-border/20 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Shopping Cart</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(cart).filter(([_, quantity]) => quantity > 0).map(([productId, quantity]) => {
                    const product = products.find(p => p.id === parseInt(productId));
                    if (!product) return null;
                    return (
                      <div key={productId} className="flex justify-between items-center">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-muted-foreground">${product.price} × {quantity}</p>
                        </div>
                        <p className="font-medium">${(product.price * quantity).toFixed(2)}</p>
                      </div>
                    );
                  })}
                  {getTotalItems() === 0 && (
                    <p className="text-muted-foreground text-center py-4">Cart is empty</p>
                  )}
                  {getTotalItems() > 0 && (
                    <>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center font-bold">
                          <span>Total: ${getTotalPrice()}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-primary">
                        Checkout
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommercePage;