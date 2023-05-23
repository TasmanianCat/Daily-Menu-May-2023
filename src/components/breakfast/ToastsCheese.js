import toastsImg from '../../images/toasts-cocoa.jpg';

function ToastsCheese() {
    const toastsOption = [
        {
            id: '01',
            category: 'breakfast',
            name: 'Toasts with cheese',
            ingredient1: '6 or 8 pieces of any bread',
            ingredient2: '50 grams of butter',
            ingredient3: '100 grams of cheese',
            ingredient4: '',
            cookingTime: '18 minutes',
            numberOfPersons: 'two',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { toastsImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={toastsImg} alt='Toasts' />
            ))}

            {toastsOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}


export default ToastsCheese;