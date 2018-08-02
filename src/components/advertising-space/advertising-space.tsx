import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'advertising-space',
  styleUrl: 'advertising-space.scss'
})
export class AdvertisingSpace {
  @Prop() title: string;
  @Prop() subtitle: string;
  @Prop() imgSrc: string;

  render() {
    return (
      <div class="flex-container">
        <div class="flex-item header">
          <h1>
            {this.title} <small>{this.subtitle}</small>
          </h1>
        </div>
        <div class="flex-item image-container">
          <img src={this.imgSrc} />
        </div>
        <div class="flex-item content">
          <p>
            <slot />
          </p>
        </div>
      </div>
    );
  }
}
