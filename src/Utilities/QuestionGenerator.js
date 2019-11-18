function QuestionGenerator() {
    const questions = [
        {
            question: "How many fingertips did Stannis Baratheon chop off of Davos' hand(s)? ",
            options: ["One","Two", "Three", "Four"],
            answer: "Four"
        },
        {
            question: "At the end of his training, what must an Unsullied kill to prove he has no mercy or weakness?",
            options: ["A slave", "A slave master", "A newborn child", "A newborn slave child"], 
            answer: "A newborn slave child"           
        },
        {
            question: "Brienne pledged her alliance to which of these pairs?",
            options: ["Renly Baratheon and Melisandre", "Catelyn Stark and Renly Baratheon ", "Sansa Stark and Selwyn Tarth ", "Stannis Baratheon and Catelyn Stark "], 
            answer:  "Catelyn Stark and Renly Baratheon "
        },
        {
            question: "What noble house is Catelyn Stark from?",
            options: ["House Tully", "House Greyjoy ", "House Bolton ", "House Frey "],
            answer: "House Tully"
        },
        {
            question: "Why could Jon leave the Night's Watch, since his vows were for life?",
            options: ["Because he was Lord Commander of the Night's watch", "Because he was a Bastard ", "Because he was heir to the throne ", "Because he died "],
            answer: "Because he died "
        },
        {
            question: "Who is the commander of the warrior-eunuchs of Astapor, known as the Unsullied?",
            options: ["Blackant", "Greyworm ", "Blueworm", "Greyant "],
            answer: "Greyworm "
        },
        {
            question: "What sort of steel is Ned Stark's sword, called Ice, made from?",
            options: ["Stainless Steel", "Dragon Steel ", "Valyrian Steel ", "Iron Steel " ],   
            answer: "Valyrian Steel "
            
        },
        {
            question: "Name the military order which holds and guards the Wall?",
            options: ["The Night's watch", "The Dothraki ", "The Unsullied ","White walkers "],
            answer: "The Night's watch"
        },
        {
            question: "What was the name of the explosive used in the Battle of Blackwater?",
            options: ["Dynamite", "Atomic Fire", "Wild Fire ", "Atomic Bomb"],
            answer: "Wild Fire "
        },
        
    ];

    return (
        questions.sort(function() {
            return (Math.random() - Math.random())}).slice(0, 5)
    )
    
         
        }    

export default QuestionGenerator;