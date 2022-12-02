(function(){
    var widthLine = 1;

    const paintCanvas = document.querySelector( '.js-paint' );
    const context = paintCanvas.getContext( '2d' );

    const colorPicker = document.querySelector( '.js-color-picker');
    const lineWidthRange = document.querySelector( '.js-line-range' );
    const lineWidthLabel = document.querySelector( '.js-range-value' );
    const btnClear = document.querySelector( '#btnClear' );
    const btnClearLine = document.querySelector( '#btnClearLine' );

    var ancho = window.innerWidth;
    var alto = window.innerHeight;
    paintCanvas.width = ancho - 5;
    paintCanvas.height = alto - 120;

    context.lineCap = 'round';

    let x = 0, y = 0;
    let isMouseDown = false;
    let isDeletingLine = false;

    const stopDrawing = () => { isMouseDown = false; }
    const startDrawing = event => {
        isMouseDown = true;   
      [x, y] = [event.offsetX, event.offsetY];  
    }
    const drawLine = event => {
        if ( isMouseDown ) {
            const newX = event.offsetX;
            const newY = event.offsetY;
            context.beginPath();
            context.moveTo( x, y );
            context.lineTo( newX, newY );
            context.stroke();
            //[x, y] = [newX, newY];
            x = newX;
            y = newY;
        }
    }

    const clearCanvas = event => {
      context.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
      crearCuadricula();
    }

    const clearLine = event => {
      if(isDeletingLine){
        isDeletingLine = false;
        event.target.classList.remove("btnDelete");
        event.target.classList.add("btnDefault");
        context.strokeStyle = colorPicker.value;
      } else {
        isDeletingLine = true;
        event.target.classList.remove("btnDefault");
        event.target.classList.add("btnDelete");
        context.strokeStyle = "white";
      }
    }

    paintCanvas.addEventListener( 'mousedown', startDrawing );
    paintCanvas.addEventListener( 'mousemove', drawLine );
    paintCanvas.addEventListener( 'mouseup', stopDrawing );
    paintCanvas.addEventListener( 'mouseout', stopDrawing );
    btnClear.addEventListener( 'click', clearCanvas );
    btnClearLine.addEventListener( 'click', clearLine);
    colorPicker.addEventListener( 'change', (event)=>{
      context.strokeStyle = event.target.value;
    });
    lineWidthRange.addEventListener( 'input', event => {
        const width = event.target.value;
        lineWidthLabel.innerHTML = width;
        context.lineWidth = width;
        widthLine = width;
    } );

    const changeSize = () => {
      var ancho = window.innerWidth;
      var alto = window.innerHeight;
      paintCanvas.width = ancho - 20;
      paintCanvas.height = alto - 120;
      crearCuadricula();
    }

    const crearCuadricula = () => {
      const paintCanvas = document.querySelector( '.js-paint' );
      const context = paintCanvas.getContext( '2d' );
      const cantX = paintCanvas.width / 50;
      const cantY = paintCanvas.height / 50;

      context.globalCompositeOperation='destination-over';
      context.strokeStyle = '#D3D3D3';
      context.lineWidth = 1;

      for(var i = 0; i < cantY; i++){
        for(var j = 0; j < cantX; j++){
          context.beginPath();
          context.rect(j*50, i*50, 50, 50);
          context.stroke();
        }
      }

      context.globalCompositeOperation='source-over';
      context.strokeStyle = colorPicker.value;
      context.lineWidth = widthLine;
      lineWidthLabel.innerHTML = widthLine;
    }

    window.onresize = changeSize;
    window.onload = crearCuadricula();
  })();