    <script>
        // Анимация кнопок при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach((button, index) => {
                // Анимация задержкой для каждой кнопки
                setTimeout(() => {
                    button.classList.add('btn-animate');
                }, index * 300);
            });
        });

        // Функция для генерации случайной идеи
        function generateRandomIdea() {
            const ideas = [
                "Создайте приложение для обмена рецептами с пользовательскими отзывами",
                "Разработайте инструмент для автоматизации рутинных задач в офисе",
                "Создайте платформу для обмена знаниями между студентами разных вузов",
                "Разработайте игру, где игроки создают свои собственные квесты",
                "Создайте сервис для поиска местных событий и мероприятий",
                "Разработайте приложение для отслеживания прогресса в изучении языков"
            ];

            const randomIndex = Math.floor(Math.random() * ideas.length);
            return ideas[randomIndex];
        }

        // Функция для добавления новой идеи на страницу
        function addNewIdea() {
            const ideasContainer = document.querySelector('.ideas-container');
            const newIdea = document.createElement('div');
            newIdea.className = 'idea-card';
            newIdea.innerHTML = `
                <h3>Новая идея</h3>
                <p>${generateRandomIdea()}</p>
                <button class="btn" onclick="alert('Идея сохранена!')">Сохранить идею</button>
            `;
            ideasContainer.appendChild(newIdea);

            // Анимация для новой кнопки
            setTimeout(() => {
                newIdea.querySelector('.btn').classList.add('btn-animate');
            }, 100);
        }

        // Добавление кнопки для генерации новой идеи
        const ideasContainer = document.querySelector('.ideas-container');
        const newIdeaButton = document.createElement('button');
        newIdeaButton.className = 'btn';
        newIdeaButton.textContent = 'Сгенерировать новую идею';
        newIdeaButton.style.margin = '20px auto';
        newIdeaButton.style.display = 'block';
        newIdeaButton.onclick = addNewIdea;
        ideasContainer.parentNode.insertBefore(newIdeaButton, ideasContainer.nextSibling);
    </script>
