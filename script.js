const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('open'));
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

        // Toggle current answer
        if (!isOpen) {
          answer.classList.add('open');
          question.classList.add('active');
        }
      });
    });