"""create breeds table

Revision ID: 2806830d3bd7
Revises: 
Create Date: 2024-09-30 18:33:21.067082

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '2806830d3bd7'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.create_table(
        'breeds',
        sa.Column('id', sa.String(), primary_key=True),
        sa.Column('name', sa.String(), nullable=False)
    )


def downgrade() -> None:
    pass
