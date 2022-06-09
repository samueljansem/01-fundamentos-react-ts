import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/samueljansem.png',
            name: 'Samuel Jansem',
            role: 'Web Developer @ Open',
        },
        content: [
            { type: 'paragraph', content: 'Fala galera! 🙌' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portfolio, se puderem dar uma olhada.',
            },
            {
                type: 'paragraph',
                content:
                    'Me ajudaria muito pois como estou começando, quaisquer dicas ajudam muito!',
            },
            {
                type: 'link',
                content: 'github.com/samueljansem/mais-um-projeto/',
            },
        ],
        publishedAt: new Date('2022-06-05 11:50:25'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @ Rocketseat',
        },
        content: [
            { type: 'paragraph', content: 'Fala pessoal!' },
            {
                type: 'paragraph',
                content:
                    'Gostei bastante dessa plataforma, estou até pensando em passar utilizar dentro da Rocketseat.',
            },
            {
                type: 'paragraph',
                content:
                    'Tenho um projeto bacana que se parece um pouco com esse, depois da uma olhada',
            },
            { type: 'link', content: 'github.com/diego3g/mais-um-projeto/' },
        ],
        publishedAt: new Date('2022-06-07 08:35:40'),
    },
];

export function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        );
                    })}
                </main>
            </div>
        </>
    );
}
