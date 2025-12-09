object Form1: TForm1
  Left = 305
  Top = 106
  BorderStyle = bsDialog
  Caption = #27431#24335#26399#26435#20215#26684#35745#31639#24037#20855'('#20108#21449#26641#27861')  '#21271#20140#22823#23398#32463#27982#23398#38498' '#33891#21487'  dongke@pku.edu.cn'
  ClientHeight = 477
  ClientWidth = 543
  Color = clBtnFace
  Font.Charset = ANSI_CHARSET
  Font.Color = clWindowText
  Font.Height = -12
  Font.Name = #23435#20307
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 12
  object Label1: TLabel
    Left = 24
    Top = 28
    Width = 48
    Height = 12
    Caption = #29616#36135#20215#26684
  end
  object Label2: TLabel
    Left = 24
    Top = 68
    Width = 36
    Height = 12
    Caption = #34892#26435#20215
  end
  object Label3: TLabel
    Left = 24
    Top = 108
    Width = 60
    Height = 12
    Caption = #24180#21270#27874#21160#29575
  end
  object Label5: TLabel
    Left = 200
    Top = 69
    Width = 97
    Height = 20
    AutoSize = False
    Caption = #26080#39118#38505#25910#30410#29575
  end
  object Label6: TLabel
    Left = 200
    Top = 109
    Width = 73
    Height = 17
    AutoSize = False
    Caption = #26102#38388#36328#24230
  end
  object Label7: TLabel
    Left = 24
    Top = 149
    Width = 24
    Height = 12
    Caption = #26399#25968
  end
  object Label8: TLabel
    Left = 200
    Top = 29
    Width = 48
    Height = 12
    Caption = #37325#22797#35745#31639
  end
  object Label9: TLabel
    Left = 376
    Top = 150
    Width = 48
    Height = 12
    Caption = #35745#31639#32791#26102
  end
  object Label10: TLabel
    Left = 168
    Top = 150
    Width = 48
    Height = 12
    Caption = #26399#26435#20215#26684
  end
  object Label11: TLabel
    Left = 336
    Top = 29
    Width = 12
    Height = 12
    Caption = #27425
  end
  object Label12: TLabel
    Left = 320
    Top = 109
    Width = 12
    Height = 12
    Caption = #24180
  end
  object Label13: TLabel
    Left = 344
    Top = 69
    Width = 24
    Height = 12
    Caption = #27599#24180
  end
  object Label4: TLabel
    Left = 496
    Top = 150
    Width = 24
    Height = 12
    Caption = #27627#31186
  end
  object Button1: TButton
    Left = 384
    Top = 104
    Width = 129
    Height = 25
    Caption = #35745#31639#26399#26435#20215#26684
    TabOrder = 0
    OnClick = Button1Click
  end
  object btns: TEdit
    Left = 88
    Top = 24
    Width = 57
    Height = 20
    TabOrder = 1
    Text = '50'
  end
  object btnx: TEdit
    Left = 72
    Top = 64
    Width = 57
    Height = 20
    TabOrder = 2
    Text = '52'
  end
  object btnu: TEdit
    Left = 104
    Top = 104
    Width = 57
    Height = 20
    TabOrder = 3
    Text = '0.4'
  end
  object btnr: TEdit
    Left = 288
    Top = 64
    Width = 49
    Height = 20
    TabOrder = 4
    Text = '0.05'
  end
  object RadioButton1: TRadioButton
    Left = 392
    Top = 24
    Width = 121
    Height = 17
    Caption = #35748#32929#26435#35777#65288#30475#28072#65289
    Checked = True
    TabOrder = 5
    TabStop = True
  end
  object RadioButton2: TRadioButton
    Left = 392
    Top = 64
    Width = 129
    Height = 17
    Caption = #35748#27837#26435#35777#65288#30475#36300#65289
    TabOrder = 6
  end
  object btnn: TEdit
    Left = 64
    Top = 144
    Width = 57
    Height = 20
    TabOrder = 7
    Text = '50'
  end
  object btnt: TEdit
    Left = 264
    Top = 104
    Width = 49
    Height = 20
    TabOrder = 8
    Text = '0.5'
  end
  object btnresult: TEdit
    Left = 232
    Top = 144
    Width = 113
    Height = 20
    TabOrder = 9
  end
  object btnelapsed: TEdit
    Left = 432
    Top = 144
    Width = 57
    Height = 20
    TabOrder = 10
  end
  object btntimes: TEdit
    Left = 272
    Top = 24
    Width = 49
    Height = 20
    TabOrder = 11
    Text = '1'
  end
  object Button2: TButton
    Left = 160
    Top = 440
    Width = 233
    Height = 25
    Caption = #29983#25104#26399#26435#20215#26684'-'#26399#25968#20989#25968#22270
    TabOrder = 12
    OnClick = Button2Click
  end
  object QRChart1: TQRChart
    Left = 8
    Top = 184
    Width = 529
    Height = 249
    Frame.Color = clBlack
    Frame.DrawTop = False
    Frame.DrawBottom = False
    Frame.DrawLeft = False
    Frame.DrawRight = False
    Size.Values = (
      658.8125
      21.1666666666667
      486.833333333333
      1399.64583333333)
    object QRDBChart1: TQRDBChart
      Left = -1
      Top = -1
      Width = 1
      Height = 1
      BackWall.Brush.Color = clWhite
      BackWall.Brush.Style = bsClear
      Title.AdjustFrame = False
      Title.Text.Strings = (
        'TQRChart')
      Title.Visible = False
      Legend.Visible = False
      View3D = False
      View3DWalls = False
      object Series1: TLineSeries
        Marks.ArrowLength = 8
        Marks.Visible = False
        SeriesColor = clRed
        ShowInLegend = False
        Dark3D = False
        Pointer.InflateMargins = True
        Pointer.Style = psRectangle
        Pointer.Visible = False
        XValues.DateTime = False
        XValues.Name = 'X'
        XValues.Multiplier = 1
        XValues.Order = loAscending
        YValues.DateTime = False
        YValues.Name = 'Y'
        YValues.Multiplier = 1
        YValues.Order = loNone
      end
    end
  end
end
