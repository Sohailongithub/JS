window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const paddleWidth = 10;
    const paddleHeight = 100;
    const paddleMargin = 10;

    let playerPaddleY = canvas.height / 2 - paddleHeight / 2;
    let computerPaddleY = canvas.height / 2 - paddleHeight / 2;

    const ballRadius = 10;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballSpeedX = 4;
    let ballSpeedY = 3;

    let playerScore = 0;
    let computerScore = 0;

    function drawRect(x, y, width, height, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    function drawCircle(x, y, radius, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx.fill();
    }

    function drawText(text, x, y, color) {
        ctx.fillStyle = color;
        ctx.font = '20px Arial';
        ctx.fillText(text, x, y);
    }

    function movePaddles() {
        canvas.addEventListener('mousemove', function(evt) {
            const rect = canvas.getBoundingClientRect();
            const root = document.documentElement;
            const mouseY = evt.clientY - rect.top - root.scrollTop;
            playerPaddleY = mouseY - paddleHeight / 2;
        });

        const paddleCenter = computerPaddleY + paddleHeight / 2;
        if (paddleCenter < ballY - 35) {
            computerPaddleY += 6;
        } else if (paddleCenter > ballY + 35) {
            computerPaddleY -= 6;
        }
    }

    function moveBall() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
            ballSpeedY = -ballSpeedY;
        }

        if (ballX - ballRadius < 0) {
            if (ballY > playerPaddleY && ballY < playerPaddleY + paddleHeight) {
                ballSpeedX = -ballSpeedX;
                const deltaY = ballY - (playerPaddleY + paddleHeight / 2);
                ballSpeedY = deltaY * 0.35;
            } else {
                computerScore++;
                resetBall();
            }
        }

        if (ballX + ballRadius > canvas.width) {
            if (ballY > computerPaddleY && ballY < computerPaddleY + paddleHeight) {
                ballSpeedX = -ballSpeedX;
                const deltaY = ballY - (computerPaddleY + paddleHeight / 2);
                ballSpeedY = deltaY * 0.35;
            } else {
                playerScore++;
                resetBall();
            }
        }
    }

    function resetBall() {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = -ballSpeedX;
        ballSpeedY = 3;
    }

    function draw() {
        drawRect(0, 0, canvas.width, canvas.height, '#000');
        drawRect(paddleMargin, playerPaddleY, paddleWidth, paddleHeight, '#fff');
        drawRect(canvas.width - paddleMargin - paddleWidth, computerPaddleY, paddleWidth, paddleHeight, '#fff');
        drawCircle(ballX, ballY, ballRadius, '#fff');
        drawText(playerScore, 100, 100, '#fff');
        drawText(computerScore, canvas.width - 100, 100, '#fff');
    }

    function gameLoop() {
        movePaddles();
        moveBall();
        draw();
    }

    setInterval(gameLoop, 1000 / 60);
};
