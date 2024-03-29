# Shapes:

triangle, trapezoid, parallelogram, rhombus, pentagon, hexagon, heptagon,
octagon, nonagon, decagon, bevel, rabbet, leftArrow, rightArrow, leftPoint,
rightPoint, leftChevron, rightChevron, star, cross, message, close, frame

# Styles:

--border-background: &lt; any css background style or image >

--content-background: &lt; any css background style or image >

--border-width: &lt; css sizes >

--background-blur: &lt; css sizes >

# Code examples:

    <curious-shape 
        data-shape="message"
        style="--content-background: url('cat.jpg') center/100% no-repeat; 
               --border-background: black;
    ">
        CAT!
    </curious-shape>

    <curious-shape
        data-shape="hexagon"
        style="
          --border-background: linear-gradient(blue, red, blue, red, blue);
          --content-background: conic-gradient(cyan, lightgreen, cyan, lightgreen, cyan, lightgreen, cyan, lightgreen, cyan, lightgreen, cyan);
          --border-width: 6px;
    ">
        <p style="color: #333;">Hexagon with custom styles</p>
    </curious-shape>

    <curious-shape data-shape="rabbet" style="--background-blur: 20px">
        <p>Shapes get a glowing effect through blur</p>
    </curious-shape>

## All shape examples

    <curious-shape data-shape="triangle">
      <section>
        <h2>Triangle</h2>
        <p>This shape is a Triangle.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="trapezoid">
      <section>
        <h2>Trapezoid</h2>
        <p>This shape is a Trapezoid.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="parallelogram">
      <section>
        <h2>Parallelogram</h2>
        <p>This shape is a Parallelogram.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="rhombus">
      <section>
        <h2>Rhombus</h2>
        <p>This shape is a Rhombus.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="pentagon">
      <section>
        <h2>Pentagon</h2>
        <p>This shape is a Pentagon.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="hexagon">
      <section>
        <h2>Hexagon</h2>
        <p>This shape is a Hexagon.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="hexagon2">
      <section>
        <h2>Hexagon Variant</h2>
        <p>This shape is another variant of a Hexagon.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="heptagon">
      <section>
        <h2>Heptagon</h2>
        <p>This shape is a Heptagon.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="octagon">
      <section>
        <h2>Octagon</h2>
        <p>This shape is an Octagon.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="nonagon">
      <section>
        <h2>Nonagon</h2>
        <p>This shape is a Nonagon.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="decagon">
      <section>
        <h2>Decagon</h2>
        <p>This shape is a Decagon.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="bevel">
      <section>
        <h2>Bevel</h2>
        <p>This shape is a Bevel.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="rabbet">
      <section>
        <h2>Rabbet</h2>
        <p>This shape is a Rabbet.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="leftArrow">
      <section>
        <h2>Left Arrow</h2>
        <p>This shape is a Left Arrow.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="rightArrow">
      <section>
        <h2>Right Arrow</h2>
        <p>This shape is a Right Arrow.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="leftPoint">
      <section>
        <h2>Left Point</h2>
        <p>This shape is a Left Point.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="rightPoint">
      <section>
        <h2>Right Point</h2>
        <p>This shape is a Right Point.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="leftChevron">
      <section>
        <h2>Left Chevron</h2>
        <p>This shape is a Left Chevron.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="rightChevron">
      <section>
        <h2>Right Chevron</h2>
        <p>This shape is a Right Chevron.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="star">
      <section>
        <h2>Star</h2>
        <p>This shape is a Star.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="cross">
      <section>
        <h2>Cross</h2>
        <p>This shape is a Cross.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="message">
      <section>
        <h2>Message</h2>
        <p>This shape is a Message.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="close">
      <section>
        <h2>Close</h2>
        <p>This shape is a Close.</p>
      </section>
    </curious-shape>

    <curious-shape data-shape="frame">
      <section>
        <h2>Frame</h2>
        <p>This shape is a Frame.</p>
      </section>
    </curious-shape>
