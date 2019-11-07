# User documentation for VRMOD


VRMOD itself doesn't have any user cofigurable options. The content of the site is determined by data and it's metadata in EMOD.

There are, however, few metadata keys which, when present, can affect the content. This document describes what data structures in emod are needed and whic metadata keys are used.

## Displayed content
VRMOD displays *Digital Sets* from EMOD. For each Digital Set, VRMOD displays all *Digital Groups* which has any displayable *Digital Items*.
*Digital Items* are then displayed based on their type.

## Special Metadata
In order to control the displayed content in VRMOD, we use several metadata keys.

### Digital Item
Special keys:
- **export** - Only items that have key **export** present and set to value **1** are considered displayable.

Common keys that are displayed for each item, if present:
- **description**
- **topic**
- **part_name**
- **name**
- **subject**
- **date**
- **abstract**
- **place**
- **publisher**
- **length**

### Digital group
Special keys:
- **order** - if present, it is used for ordering the groups on the site.

Common keys:
- **description**

### Digital set
Name of the Set is determined as contens of keys **description** and **part_name** concatenated.

Then the same keys are for Digital Items are displayed.








