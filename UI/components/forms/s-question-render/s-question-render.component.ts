import { CommonModule } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Store } from '@ngrx/store';
import { CardRenderState } from 'UI/modules/requests/store/cardRender.state';
import {
  CardRenderModel,
  questionModel,
  subtitleModel,
} from 'core/api/models/cardRender/CardRenderModel';
import { skip } from 'rxjs';
import { I18NModel } from 'core/api/models/I18N/I18N.model';
import { SRadioButtonComponent } from '../s-radio-button/s-radio-button.component';
import { RenderCardModel } from 'UI/models/RenderCardModel';

@Component({
  standalone: true,
  selector: 'app-s-question-render',
  templateUrl: './s-question-render.component.html',
  styleUrls: ['./s-question-render.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    ButtonModule,
    CardModule,
    SRadioButtonComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SQuestionRenderComponent implements OnChanges {
  @Output() eventNextQuestion = new EventEmitter<{
    error: boolean;
  }>();
  @Input() cardRender!: RenderCardModel;
  @Input() nextButtonLabel: string = 'Siguiente';

  // public get getFormGroupQuestions() {
  //   return (this.questions.questions as questionModel).controls;
  // }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
