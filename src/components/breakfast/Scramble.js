import scrambleImg from '../../images/scramble-cheese-sausages.jpg';

function Scramble() {
    const scrambleOption = [
        {
            id: '01',
            category: 'breakfast',
            name: 'Scramble with cheese and sausages',
            ingredient1: '6 chicken eggs',
            ingredient2: '100 ml of milk',
            ingredient3: '70 grams of cheese',
            ingredient4: '4 or 6 sausages',
            cookingTime: '15 minutes',
            numberOfPersons: 'two',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { scrambleImg }
        }
    ]
    // Explanation of the recipe
    const instruction = [
        {
            id: '03',
            procedure: "Here's a step-by-step explanation on how to cook scrambled eggs with sausages:",
            step1: 'Step 1: Prep the sausages',
            li011: '- Begin by heating a non-stick frying pan over medium heat.',
            li012: "- If the sausages are uncooked, you'll need to cook them first.Place the sausages in the pan and cook until they are browned and cooked through.This usually takes about 8-10 minutes, but cooking time may vary depending on the thickness of the sausages.Once cooked, set the sausages aside.",
            step2: 'Step 2: Beat the eggs',
            li021: '- In a bowl, crack the chicken eggs and beat them using a fork or whisk until the yolks and whites are well combined.',
            li022: "- Add the milk to the beaten eggs and whisk again until the mixture is homogeneous.",
            step3: "Step 3: Cook the scrambled eggs",
            li031: "- Return the frying pan to medium heat. If there's residual fat or oil from cooking the sausages, you can use it to cook the eggs. Otherwise, you can add a little oil or butter to the pan.",
            li032: "- Pour the beaten egg and milk mixture into the pan. Allow it to cook for a few seconds until the edges start to set.",
            step4: "Step 4: Scramble the eggs",
            li041: "- Using a spatula or wooden spoon, gently push the cooked edges of the eggs towards the center, allowing the uncooked portion to flow to the edges.",
            li042: "- Continue to gently stir and fold the eggs as they cook, breaking them up into smaller curds. This helps to ensure even cooking and prevents the eggs from sticking to the pan.",
            step5: "Step 5: Add the cheese and sausages",
            li051: "- Once the eggs are mostly cooked but still slightly runny, sprinkle the grated cheese evenly over the eggs. Stir the cheese into the eggs until it melts and combines well.",
            li052: "- Cut the cooked sausages into small pieces and add them to the pan. Mix them in with the eggs.",
            step6: "Step 6: Finish cooking and serve",
            li061: "- Continue cooking the scrambled eggs until they reach your desired level of doneness. Some prefer them slightly moist, while others like them well-cooked and dry.",
            li062: "- Once cooked to your liking, remove the pan from the heat and transfer the scrambled eggs with sausages to a serving plate.",
            li063: "- You can garnish the dish with some fresh herbs, such as chopped parsley or chives, if desired.",
            li064: "- Serve the delicious scrambled eggs with sausages while they are still warm.",
            wishes: "Enjoy your scrambled eggs with sausages!"
        }
    ]
    // A function to show receipe
    const handleShowReceipe = () => {
        document.querySelector('.hidden').classList.toggle('show');
    }

    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={scrambleImg} alt='Scramble' />
            ))}

            {scrambleOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}

            <p id='showHidden' className='show-hidden' onClick={handleShowReceipe}><strong><u>Show / Hide recipe</u></strong></p>

            <div id='recipe' className='hidden'>
                {instruction.map(({ id, procedure, step1, li011, li012, step2, li021, li022, step3, li031, li032, step4, li041, li042, step5, li051, li052, step6, li061, li062, li063, li064, wishes }) => (
                    <p key={id}>
                        <strong>
                            {procedure}
                        </strong><br />
                        <u className='step'>
                            {step1}
                        </u><br />
                        <em>
                            {li011}
                        </em><br />
                        <em>
                            {li012}
                        </em><br />
                        <u className='step'>
                            {step2}
                        </u><br />
                        <em>
                            {li021}
                        </em><br />
                        <em>
                            {li022}
                        </em><br />
                        <u className='step'>
                            {step3}
                        </u><br />
                        <em>
                            {li031}
                        </em><br />
                        <em>
                            {li032}
                        </em><br />
                        <u className='step'>
                            {step4}
                        </u><br />
                        <em>
                            {li041}
                        </em><br />
                        <em>
                            {li042}
                        </em><br />
                        <u className='step'>
                            {step5}
                        </u><br />
                        <em>
                            {li051}
                        </em><br />
                        <em>
                            {li052}
                        </em><br />
                        <u className='step'>
                            {step6}
                        </u><br />
                        <em>
                            {li061}
                        </em><br />
                        <em>
                            {li062}
                        </em><br />
                        <em>
                            {li063}
                        </em><br />
                        <em>
                            {li064}
                        </em><br />
                        {wishes}
                    </p>
                ))}
            </div>
        </div>
    );
}


export default Scramble;