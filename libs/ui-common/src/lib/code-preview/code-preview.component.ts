import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import { FileToPreview } from '../file-to-preview.interface';
import * as prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'forms-course-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.css']
})
export class CodePreviewComponent implements AfterViewInit {
  /** The html element marked by `#code` to add the prism highlighting to. */
  @ViewChild('code', { static: true }) codeEl: ElementRef<HTMLElement>;

  /** The source code for the snippet as a string */
  @Input() fileToPreview: FileToPreview;

  ngAfterViewInit() {
    this.codeEl.nativeElement.innerHTML = prism.highlight(
      this.fileToPreview.fileContents.default.trim(),
      prism.languages[this.fileToPreview.language],
      this.fileToPreview.language
    );
  }
}
