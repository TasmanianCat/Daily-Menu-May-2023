import pastaPrawnImg from '../../images/PastaShrimps.jpg';

function PastaPrawn() {
    const shawarmaOption = [
        {
            id: '01',
            category: 'lunch',
            name: 'Pasta with prawn',
            ingredient1: '300-400 grams of raw peeled prawn',
            ingredient2: '200-300 grams of pasta',
            ingredient3: 'sliced tomato (1 medium tomato is enough)',
            ingredient4: '1 tablespoon of extra-virgin olive oil',
            ingredient5: '1 garlic clove',
            ingredient6: 'chopped parsley',
            ingredient7: 'ground black pepper',
            ingredient8: '40 grams of freshly grated Parmesan',
            ingredient9: '25 grams of butter',
            cookingTime: '25 minutes',
            numberOfPersons: 'two',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { pastaPrawnImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={pastaPrawnImg} alt='Pasta with prawns' />
            ))}

            {shawarmaOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}, {ingredient5}, {ingredient6}, {ingredient7}, {ingredient8}, {ingredient9}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}


export default PastaPrawn;