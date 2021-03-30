var Posts = [
    {
        id: '1',
        descriprion: 'Книга очень интересная , читается легко, даже жалко, что так быстро прочел :(',
        createdAt: new Date(2021, 3, 1, 23, 0, 0),
        author: 'Ёжик @cool_hedgehog',
        photoLink: '',
        likes: ['Крыса @yesIamArat','Сова @big_eyes', 'Лев @king', 'Йорк @york_dog'],
        hashTags:['100','200','300', '400']
    },
    {id: '2',
        descriprion: 'Как все-таки интересен мир человека... Мы стремимся стать лучше,\n' +
            'умнее, красивее, добиваемся успехов в разных сферах жизни, а\n' +
            'оказывается счастье совсем не в этом... Точнее, может и в этом...\n' +
            'Счастье в нас самих... Это невероятная книга, она показывает мир\n' +
            'человека на вершине и у подножия...',
        createdAt: new Date(2021, 3, 1, 22, 0, 0),
        author: 'Крыса @yesIamArat',
        likes: ['Йорк @york_dog', 'Лягушка @water_lily', 'Муха @zzzz_muha', 'Ёжик @cool_hedgehog']
    },
    {
        id: '3',
        descriprion: 'Прочла, отвосторгалась - теперь делюсь с другими. Эта книга\n' +
            'отличается от остальных книг Джен тем, что это… не совсем\n' +
            'книга! Это, скорее, дневник "тренировок" по саморазвитию.\n' +
            'Каждая страница - маленький шажок по этому тернистому пути.',
        createdAt: new Date(2021, 3, 1, 23, 3, 0),
        author: 'Сова @big_eyes',
        likes: ['Муха @zzzz_muha', 'Ёжик @cool_hedgehog']
    },
    {
        id: '4',
        descriprion: 'Роман читается легко, слог кажется сложным, но к нему быстро\n' +
            'привыкаешь, а к концу произведения, уже сам используешь его\n' +
            'в речи.',
        createdAt: new Date(2021, 3, 2, 11, 3, 0),
        author: 'Лев @king',
        likes: ['Крыса @yesIamArat','Сова @big_eyes', 'Ёжик @cool_hedgehog']
    },
    {
        id: '5',
        descriprion: 'Вполне себе читабельно. Но не фонтан. Начитавшись отзывов,\n' +
            'ожидала чего-то большего. Не понимаю, почему все в таком\n' +
            'восторге? В книге есть смысл, это правда, но не более!',
        createdAt: new Date(2021, 3, 2, 9, 54,34),
        author: 'Йорк @york_dog ',
        likes: ['Лягушка @water_lily', 'Муха @zzzz_muha', 'Ёжик @cool_hedgehog']
    },
    {
        id: '6',
        descriprion: ' Книга шикарная. Читать. Читать. Читать всем!!!!!\n' +
            'Потрясающая книга! Меня очень впечатлило. А с учётом того что книга написана\n' +
            'ещё в пятидесятых годах - это просто великолепно. Советую почитать и подумать.',
        createdAt: new Date(2021, 3, 2, 10, 0,0),
        author: 'Ёжик @cool_hedgehog',
        likes: ['Крыса @yesIamArat','Сова @big_eyes', 'Лев @king', 'Йорк @york_dog']
    },
    {
        id: '7',
        descriprion: 'Одна из любимейших книг...\n' +
            'Прочитав жестокость этого произведения, прочувствовав эмоции этих детей, увидев все это в своих мыслях\n' +
            '- я была ошарашена. Произведение залегло в душу. Все\n' +
            'переживания героев. Все их мысли.',
        createdAt: new Date(2021, 3, 2, 10, 34,24),
        author: 'Лягушка @water_lily',
        likes: ['Крыса @yesIamArat', 'Муха @zzzz_muha', 'Ёжик @cool_hedgehog']
    },
    {
        id: '8',
        descriprion: ' Моё мнение такого, что книга не стоит потраченного времени,\n' +
            'ну или той рекламы и того восхищения, которые его окружили.',
        createdAt: new Date(2021, 3,2,10,57,9),
        author: 'Муха @zzzz_muha',
        likes: ['Ёжик @cool_hedgehog']
    },
    {
        id: '9',
        descriprion: 'Отличная книга, интересный сюжет, легко читается. Интересно описана работа криминального психолога.',
        createdAt: new Date(2021, 3,2, 11,30,0),
        author: 'Ёжик @cool_hedgehog',
        likes: ['Крыса @yesIamArat','Сова @big_eyes', 'Лев @king', 'Йорк @york_dog']
    },
    {
        id: '10',
        descriprion: 'Это просто БОМБА. Я давно так не зачитывалась. Нет воды , все по делу . Читается на одном дыхании .',
        createdAt: new Date(2021, 3,2, 12, 14,0),
        author: 'Муха @zzzz_muha',
        likes: ['Крыса @yesIamArat','Сова @big_eyes']
    },
    {
        id: '11',
        descriprion: 'Уже прочитала пол книги(за 4 дня), не могу оторваться, очень увлекательный сюжет :)',
        createdAt: new Date(2021, 3, 1, 2, 3, 4, 567),
        author: "Лягушка @water_lily",
        likes: ['Крыса @yesIamArat','Сова @big_eyes']
    },
    {
        id: '12',
        descriprion: 'Книга очень интересная, отличный сюжет. Прочла очень быстро; легко читается. Было бы здорово, если бы было ещё продолжение, очень хотелось бы!)',
        createdAt: new Date(2021,3,2,20,23,0),
        author: 'Сова @big_eyes',
        likes: [ 'Лягушка @water_lily', 'Муха @zzzz_muha', 'Ёжик @cool_hedgehog']
    },
    {
        id: '13',
        descriprion: 'Это очень круто. Держит в напряжении до конца. Надеюсь на продолжение',
        createdAt: new Date(2021,3,2, 2, 3, 4, 567),
        author: 'Сова @big_eyes',
        likes: ['Ёжик @cool_hedgehog']
    },
    {
        id: '14',
        descriprion: 'Сюжет не впечатлил. Книга кажется не законченной, а концовка очень смазанной.',
        createdAt: new Date(2021,3,3,14,14,8),
        author: 'Крыса @yesIamArat',
        likes: ['Лягушка @water_lily', 'Муха @zzzz_muha', 'Ёжик @cool_hedgehog']
    },
    {
        id: '15',
        descriprion: 'один из лучших триллеров, которые я когда-либо читала! без сомнения рекомендую к прочтению!',
        createdAt: new Date(2021,2,15,15,15,0),
        author: 'Крыса @yesIamArat',
        likes: [ 'Лев @king', 'Йорк @york_dog']
    },
    {
        id: '16',
        descriprion: 'один из лучших триллеров, которые я когда-либо читала! без сомнения рекомендую к прочтению!',
        createdAt: new Date(2021,3,3,16,0,0),
        author: 'Йорк @york_dog',
        likes: ['Крыса @yesIamArat','Сова @big_eyes', 'Лев @king']
    },
    {
        id: '17',
        descriprion: 'Действительно хорошая книга. Но... когда я читала, уже знала наперёд что будет. Очень всё предсказуемо',
        createdAt: new Date(2021,2,15,20,29,29),
        author: 'Йорк @york_dog',
        likes: [ 'Муха @zzzz_muha', 'Ёжик @cool_hedgehog']
    },
    {
        id: '18',
        descriprion: 'Интересная книга.Была мной прочитана за два дня.Интересный сюжет, неожиданные повороты особенно в конце книги',
        createdAt: new Date(2021,3,4,5,15,0),
        author: 'Лев @king',
        likes: [ 'Йорк @york_dog', 'Лягушка @water_lily', 'Муха @zzzz_muha', 'Ёжик @cool_hedgehog']
    },
    {
        id: '19',
        descriprion: 'книжка хороша! Интересная идея, жду теперь сериал)',
        createdAt: new Date(2021, 2, 15, 13, 3, 4, 567),
        author: "Лев @king",
        likes: ['Ёжик @cool_hedgehog']
    },
    {
        id: '20',
        descriprion: 'без сомнения перечитаю',
        createdAt: new Date(2021,2,15,15,17,0),
        author: 'Крыса @yesIamArat',
        likes: ['Муха @zzzz_muha', 'Ёжик @cool_hedgehog']
    }
    ];

class Work_with_posts{
    #Posts_set = new Set();

    constructor(posts) {
        this.posts = posts;
    }

    getPosts(skip=0,top= 10, filterConfig) {
        if (filterConfig !== undefined) {
            let result = Posts.filter(team => team.author === filterConfig.author)
            result.sort(function(a,b){
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            return result.slice(skip, top+skip-1);
        } else {
            Posts.sort(function(a,b){
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            return Posts.slice(skip, top+skip);
        }
    }

    static #has_id(id){
        for(let i =0; i<Posts.length; i++){
            if(id == Posts[i].id)
                return true;
        }
        return false;
    }

    getPost(id) {
        for(let i = 0; i<Posts.length; i++){
            if(id == Posts[i].id)
                return Posts[i];
        }
        throw "Ошибка. Поста с таким id не существует";
    }

    validatePost(Object){
        return Object.id != null && Object.descriprion != null && Object.descriprion.length<200
            && Object.author != null && Object.createdAt != null && typeof Object.id === "string" && typeof Object.descriprion === "string"
            && typeof  Object.author === "string" ;
    }


    addPost(Object){
        if(this.validatePost(Object)){
            Posts.splice(Posts.length,0,Object);
            return true;
        }else {
            return false;
        }
    }

    removePost(id){
        for (let i = 0; i < Posts.length; i++) {
            if (Posts[i].id === id) {
                return Posts.splice(i,1);
            }
        }
        throw "Couldn't find object with id: " + id;
    }


    editPost(id, Post){
        if(this.validatePost(this.getPost(id)) && Work_with_posts.#has_id(id)){
            this.getPost(id).descriprion = Post.descriprion;
            return true;
            }
        else {
            return false;
        }
    }

    addAll(posts){
        let result=[], k=0;
        for(let i = 0; i<Posts.length; i++){
            if(this.validatePost(Posts[i])){
                this.#Posts_set.add(posts[i])
            }else {
                result[k] = Posts[i];
                k++;
            }
        }
        return result;
    }

    clear(){
        this.#Posts_set.clear();
    }

}

a = new Work_with_posts(Posts);
console.log("Первые 10 отсортированных постов")
console.log(a.getPosts(0,10));
console.log("10 отсортированных постов, пропуская первые 10")
console.log(a.getPosts(10,10));
console.log("Посты, автором которых является ‘Крыса’, отсортированные по дате создания")
console.log(a.getPosts(0, 10, {author: 'Крыса @yesIamArat'}))
console.log("пост из массива Posts с id=12")
console.log(a.getPost(12))

let new_post1={id: 21,
        descriprion: 'новый пост',
    createdAt: new Date(2021,3,4,21,26,0),
    author: 'Йорк @york_dog'}
console.log("Проверка поста на валидность")
console.log(a.validatePost(new_post1))
let new_post2={
    id: '21',
    descriprion: 'новый пост',
    createdAt: new Date(2021,3,4,21,26,0),
    author: 'Йорк @york_dog',
    likes: []
    }

console.log(a.validatePost(new_post2))
console.log("Добавление нового поста в массив Posts")
console.log(a.addPost(new_post1))
console.log(a.addPost(new_post2))

console.log("Изменение поста с id=1")
a.editPost('1', { descriprion: 'Новая информация'});
console.log("Удаление поста c id=3 из массива Posts")
a.removePost('3')
console.log(Posts)

console.log("Добавление всех постов из массива в коллекцию")
console.log(a.addAll(Posts))

a.clear();






