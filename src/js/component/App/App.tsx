import './App.scss';
import * as React from 'react';
import Carousel, {CarouselItems} from "../Carousel/Carousel";
import BulletList from "../Navigation/BulletList";
import Title, {TitleItems} from "../Title/Title";

export interface AppProps
{

}

const App: React.FunctionComponent<AppProps> = props =>
{
    const [index, setIndex] = React.useState<number>(0);

    const imageUrls: string[] = [
        'https://wallpapercave.com/wp/wp1835444.jpg',
        'https://images.alphacoders.com/459/thumb-1920-459768.jpg',
        'https://7wallpapers.net/wp-content/uploads/15_Amsterdam.jpg',
        'https://c4.wallpaperflare.com/wallpaper/811/217/233/amsterdam-canal-sunset-houses-wallpaper-preview.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMitUbiEK3MwqGsJZsS43isyhVM65On5SJLg&usqp=CAU',
        'https://www.computable.nl/img/56/32/org_org/5632191.jpg'
    ];

    function renderImages(): React.ReactNode[]
    {
        const images: React.ReactNode[] = [];
        imageUrls.forEach((url: string) => {
            images.push(<div
                className="example-carousel-item"
                style={{
                    width: '100%',
                    height: '300px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundImage: `url('${url}')`
                }}
            />);
        });
        return images;
    }

    return <main className="app">
        <Title
            text='Image Gallery'
        />
        <Carousel
            items={renderImages() as CarouselItems}
            index={index}
        />
        <BulletList
            bulletCount={imageUrls.length}
            currentIndex={index}
            onClick={(index: number) => setIndex(index)}
        />
    </main>
};

export default App;