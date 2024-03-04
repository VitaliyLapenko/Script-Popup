<script>
        window.onload = function() {
            // Перевірка наявності атрибуту в деякому елементі
            var divElement = document.querySelector('div[data-remove-body="true"]');
            if (divElement) {
                // Видалення тіла сторінки
                document.body.remove();
            }
        };
    </script>
