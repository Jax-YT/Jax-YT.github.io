(function() {
    const titleQuestions = document.querySelectorAll('.questions_title');

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions_padding--add');
            question.querySelector('.questions_arrow').classList.toggle('questions_arrow--rotate');

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
})();

