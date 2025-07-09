import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const popularGames = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      price: "1990",
      originalPrice: "2990",
      discount: "33%",
      image: "/img/0a8b5951-0c36-4a00-916b-61cc7b4a777e.jpg",
      rating: 4.2,
      genre: "RPG",
    },
    {
      id: 2,
      title: "Elden Ring",
      price: "2490",
      originalPrice: null,
      discount: null,
      image: "/img/ceabda63-4c37-439b-926a-1db40084f8e7.jpg",
      rating: 4.9,
      genre: "Action",
    },
    {
      id: 3,
      title: "God of War",
      price: "1490",
      originalPrice: "1990",
      discount: "25%",
      image: "/img/41e02edb-a8e2-4ae2-99d9-e863b7170d35.jpg",
      rating: 4.8,
      genre: "Action",
    },
    {
      id: 4,
      title: "Horizon Zero Dawn",
      price: "999",
      originalPrice: "1999",
      discount: "50%",
      image: "/placeholder.svg",
      rating: 4.6,
      genre: "Adventure",
    },
    {
      id: 5,
      title: "The Witcher 3",
      price: "699",
      originalPrice: "1399",
      discount: "50%",
      image: "/placeholder.svg",
      rating: 4.9,
      genre: "RPG",
    },
    {
      id: 6,
      title: "Spider-Man Remastered",
      price: "1990",
      originalPrice: null,
      discount: null,
      image: "/placeholder.svg",
      rating: 4.7,
      genre: "Action",
    },
  ];

  const genres = [
    { name: "Action", icon: "Zap", count: 156 },
    { name: "RPG", icon: "Sword", count: 89 },
    { name: "Adventure", icon: "Map", count: 124 },
    { name: "Shooter", icon: "Target", count: 67 },
    { name: "Strategy", icon: "Brain", count: 43 },
    { name: "Racing", icon: "Car", count: 29 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" size={32} className="text-orange-400" />
              <h1 className="text-2xl font-bold text-white font-orbitron">
                GAME ZONE
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                Игры по жанрам
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                Новинки
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                Акции
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                Профиль
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
              >
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto">
          <div className="relative z-10">
            <h2 className="text-6xl font-bold text-white mb-6 font-orbitron">
              ИГРЫ БУДУЩЕГО
              <span className="block text-4xl text-orange-400 mt-2">
                УЖЕ СЕГОДНЯ
              </span>
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-2xl mx-auto">
              Цифровые ключи с мгновенной доставкой. Более 10,000 игр для всех
              платформ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="relative max-w-md">
                <Input
                  placeholder="Поиск игр..."
                  className="pr-12 bg-black/50 border-purple-500/50 text-white placeholder-gray-400"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1 bg-orange-500 hover:bg-orange-600"
                >
                  <Icon name="Search" size={16} />
                </Button>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать приложение
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
      </section>

      {/* Genres Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-orbitron">
            ЖАНРЫ
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {genres.map((genre) => (
              <Card
                key={genre.name}
                className="bg-black/30 border-purple-500/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <Icon
                    name={genre.icon}
                    size={32}
                    className="text-orange-400 mx-auto mb-3"
                  />
                  <h4 className="text-white font-semibold mb-1">
                    {genre.name}
                  </h4>
                  <p className="text-cyan-300 text-sm">{genre.count} игр</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white font-orbitron">
              ПОПУЛЯРНЫЕ ИГРЫ
            </h3>
            <Button
              variant="outline"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
            >
              Посмотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGames.map((game) => (
              <Card
                key={game.id}
                className="bg-black/30 border-purple-500/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover"
                  />
                  {game.discount && (
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                      -{game.discount}
                    </Badge>
                  )}
                  <Badge className="absolute top-2 left-2 bg-purple-600 text-white">
                    {game.genre}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">
                    {game.title}
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                    <span className="text-yellow-400 text-sm">
                      {game.rating}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-400">
                        {game.price}₽
                      </span>
                      {game.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          {game.originalPrice}₽
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-black/20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-orbitron">
            ПОЧЕМУ МЫ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-orange-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Мгновенная доставка
              </h4>
              <p className="text-gray-300">Получите ключ сразу после покупки</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Гарантия качества
              </h4>
              <p className="text-gray-300">Только лицензионные игры</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Headphones" size={32} className="text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Поддержка 24/7
              </h4>
              <p className="text-gray-300">Всегда готовы помочь</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-purple-500/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Gamepad2" size={24} className="text-orange-400" />
            <span className="text-white font-bold font-orbitron">
              GAME ZONE
            </span>
          </div>
          <p className="text-gray-400">
            © 2024 Game Zone. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
