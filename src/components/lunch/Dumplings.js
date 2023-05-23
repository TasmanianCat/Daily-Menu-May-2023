import dumplingsImg from '../../images/dumplings-on-a-pan.jpg';

function Dumplings() {
    const dumplingsOption = [
        {
            id: '01',
            category: 'lunch',
            name: 'Pan-fried dumplings',
            ingredient1: '300 grams of dumplings',
            ingredient2: 'sour cream or tomato sauce',
            ingredient3: '',
            ingredient4: '',
            cookingTime: '20 minutes',
            numberOfPersons: 'two',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { dumplingsImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={dumplingsImg} alt='Dumplings' />
            ))}

            {dumplingsOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}


export default Dumplings;