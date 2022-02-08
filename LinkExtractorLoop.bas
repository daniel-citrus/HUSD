Attribute VB_Name = "LinkExtractorLoop"
' DESCRIPTION:
' This module will go down a list of links and extract their embedded links.
' Extracted links will be copied to the right of the original cell
' Original link cell will lose all formatting

' REQUIREMENTS:
' List of links must be vertical with no blank cells in between
' Ensure that cells that are directly to the right of the list are blank
' Select top link cell then run module

Sub ExtractLinksLoop()
    Do While ActiveCell <> ""
        ActiveCell.Offset(0, 1) = GetURL(ActiveCell)
        ActiveCell.ClearFormats
        ActiveCell.Hyperlinks.Delete
        ActiveCell.Offset(1, 0).Select
    Loop
End Sub

Function GetURL(rng As Range) As String
     On Error Resume Next
     GetURL = rng.Hyperlinks(1).Address
End Function
