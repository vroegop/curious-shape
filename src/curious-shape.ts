/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';

/**
 * A shape element.
 *
 * @slot - This element has a slot
 */
@customElement('curious-shape')
export class CuriousShape extends LitElement {
    static override styles = css`
        :host {
            display: inline-block;
            min-width:100px;

            --border-background: linear-gradient(rgba(255, 164, 0, 0.8), rgba(255, 215, 0, 0.5), rgba(255, 255, 0, 0.2), rgba(184, 134, 11, 0.8), gold, yellow, rgba(184, 134, 11, 0.2), rgba(255, 215, 0, 0.5), rgba(255, 255, 0, 0.8));;
            --content-background: conic-gradient(#444, #555, #444, #555, #444, #555, #444, #555, #444);
            --border-width: 4px;
            --background-blur: 0;
        }

        div.border-background {
            background: var(--border-background);
        }

        div.content {
            width: calc(100% - var(--border-width) * 2);
            height: calc(100% - var(--border-width) * 2);
            transform: translate(var(--border-width), var(--border-width));

            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            box-sizing: border-box;
        }
        
        div.content:before {
            content: ' ';
            position:absolute;
            left:0;
            top:0;
            width: 100%;
            height: 100%;
            z-index:-1;
            background: var(--content-background);
            filter: blur(var(--background-blur));
        }
        
        .content *, .content ::slotted(*) {
            margin: 0;
            padding: 0;
            text-align: center;
        }
    `;

    /**
     * The sides of the polygon
     */
    @property({ type: String })
    shape = 'triangle';

    /**
     * Glows on the inside
     */
    @property({ type: Boolean })
    glow = false;

    override connectedCallback() {
        super.connectedCallback();
    }

    override render() {
        return html`
            <div class="border-background" style="${styleMap({clipPath: this.shapeArray[this.shape].shape, aspectRatio: this.shapeArray[this.shape].aspectRatio })}">
                <div class="content ${this.glow ? 'glow' : ''}" style="${styleMap({clipPath: this.shapeArray[this.shape].shape })}">
                    <slot></slot>
                </div>
            </div>
        `;
    }

    shapeArray: { [key: string] : { shape: string, aspectRatio: string } } = {
        triangle: {
            shape: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            aspectRatio: '1.15/1'
        },
        trapezoid: {
            shape: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
            aspectRatio: '1/1'
        },
        parallelogram: {
            shape: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
            aspectRatio: '1/1'
        },
        rhombus: {
            shape: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            aspectRatio: '1/1'
        },
        pentagon: {
            shape: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            aspectRatio: '1.05 / 1'
        },
        hexagon: {
            shape: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            aspectRatio: '1.15/1'
        },
        hexagon2: {
            shape: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            aspectRatio: '1/1.15'
        },
        heptagon: {
            shape: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
            aspectRatio: '1.05 / 1'
        },
        octagon: {
            shape: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            aspectRatio: '1/1'
        },
        nonagon: {
            shape: 'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)',
            aspectRatio: '1.05 / 1'
        },
        decagon: {
            shape: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
            aspectRatio: '1/1'
        },
        bevel: {
            shape: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
            aspectRatio: '1/1'
        },
        rabbet: {
            shape: 'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
            aspectRatio: '1/1'
        },
        leftArrow: {
            shape: 'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)',
            aspectRatio: '1.5/1'
        },
        rightArrow: {
            shape: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
            aspectRatio: '1.5/1'
        },
        leftPoint: {
            shape: 'polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%)',
            aspectRatio: '2/1'
        },
        rightPoint: {
            shape: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
            aspectRatio: '2/1'
        },
        leftChevron: {
            shape: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
            aspectRatio: '1/1'
        },
        rightChevron: {
            shape: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
            aspectRatio: '1/1'
        },
        star: {
            shape: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            aspectRatio: '1/1'
        },
        cross: {
            shape: 'polygon(0% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 100% 25%, 100% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 0% 50%)',
            aspectRatio: '0.7/1'
        },
        message: {
            shape: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
            aspectRatio: '1/0.75'
        },
        close: {
            shape: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
            aspectRatio: '1/1'
        },
        frame: {
            shape: 'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)',
            aspectRatio: '1/1'
        }
    };

}

declare global {
    interface HTMLElementTagNameMap {
        'curious-shape': CuriousShape;
    }
}